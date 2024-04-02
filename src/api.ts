import {
  ClientOnResponseHookPayload,
  ClientPlugin,
  createClient,
  type NormalizeOAS,
} from "fets";
import type openapi from "./openapi";

// Given a cookie key `name`, returns the value of
// the cookie or `null`, if the key is not found.
function getCookie(name: string): string | null {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
}

export function useAuth(token: string): ClientPlugin {
  return {
    onRequestInit({ requestInit }) {
      requestInit.headers = {
        ...requestInit.headers,
        Authorization: `Bearer ${token}`,
      };
    },
  };
}

async function describeResponse(
  data: ClientOnResponseHookPayload,
  text = false,
) {
  let txt =
    `${data.method} ${data.path}` +
    ` => ${data.response.status} [${data.response.statusText}]`;
  if (text) {
    return txt + `\n${await data.response.text()}`;
  }
  return txt;
}
export function log(): ClientPlugin {
  return {
    async onResponse(data) {
      if (!data.response.ok) {
        console.error(await describeResponse(data));
      } else {
        console.log(await describeResponse(data));
      }
    },
  };
}

export function throwOnError(): ClientPlugin {
  return {
    async onResponse(data) {
      if (!data.response.ok) {
        let content = await data.response.json();
        throw {
          response: data.response,
          message: await describeResponse(data),
          detail: content.detail,
        };
      }
    },
  };
}

type Auth = {
  headers: {
    Authorization: `Bearer ${string}`;
  };
};

function auth(): Auth {
  return {
    headers: {
      Authorization: `Bearer ${getCookie("Authorization")}`,
    },
  };
}

const client = createClient<NormalizeOAS<typeof openapi>>({
  plugins: [log(), throwOnError()],
});

export const api = {
  async logIn(username: string, password: string) {
    return await client["/api/v1/auth/login"].post({
      formUrlEncoded: {
        scope: "",
        username: username,
        password: password,
      },
    });
  },

  async signUp(obj: any) {
    return await client["/api/v1/auth/signup"].post({
      json: obj,
    });
  },

  async orderDomainQuery(domain: string) {
    return await client["/api/v1/order/domain-query"].get({
      query: {
        domain: domain,
      },
    });
  },

  async homeDomainQuery(domain: string) {
    return await client["/api/v1/home/domain-query"].get({
      query: {
        domain: domain,
      },
    });
  },
};

export default api;
