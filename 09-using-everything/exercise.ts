/* eslint-disable  @typescript-eslint/no-namespace */
/* eslint-disable  @typescript-eslint/no-unused-vars */

import { Equal, Expect, TODO } from "../helpers";

/**
 * 1. Implement a `ExtractUrlParamNames<url>` generic
 *    which returns a union type containing all parameters in
 *    a given url.
 *    Parameters start by `:` and end at the next `/`.
 */
namespace one {
  type ExtractUrlParams<url> = TODO;

  type res1 = ExtractUrlParams<"/user/:username">;
  type test1 = Expect<Equal<res1, "username">>;

  type res2 = ExtractUrlParams<"/user/:username/post/:postId">;
  type test2 = Expect<Equal<res2, "username" | "postId">>;

  type res3 =
    ExtractUrlParams<"/user/:username/post/:postId/comment/:commentId">;
  type test3 = Expect<Equal<res3, "username" | "postId" | "commentId">>;
}

/**
 * 2. Implement a `ExtractUrlParams<url>` generic extracting
 *    the of url parameters
 */
namespace two {
  type ExtractUrlParams<url> = TODO;

  type res1 = ExtractUrlParams<"/user/:username">;
  type test1 = Expect<Equal<res1, { username: string }>>;

  type res2 = ExtractUrlParams<"/user/:username/post/:postId">;
  type test2 = Expect<Equal<res2, { username: string; postId: string }>>;
}

// 3. Add optional params.
namespace three {
  type ExtractUrlParams<url> = TODO;

  type res3 = ExtractUrlParams<"/dashboard(/:dashboardId)">;
  type test3 = Expect<Equal<res3, { dashboardId?: string }>>;

  type res4 = ExtractUrlParams<"org/:orgId/dashboard(/:dashboardId)">;
  type test4 = Expect<Equal<res4, { orgId: string; dashboardId?: string }>>;
}

namespace bonus {
  // 4. Bonus: make a `createURL(url, params)` function using the ExtractUrlParams type
  // to make sure the `params` object is correct!
  namespace four {
    function createURL(url: TODO, params: TODO) {}

    createURL("org/:orgId/dashboard(/:dashboardId)", { orgId: "2" });
    createURL("org/:orgId/dashboard(/:dashboardId)", {
      orgId: "2",
      dashboardId: "3",
    });
    // @ts-expect-error: orgId is missing
    createURL("org/:orgId/dashboard(/:dashboardId)", { dashboardId: "2" });
    createURL("org/:orgId/dashboard(/:dashboardId)", {
      orgId: "2",
      // @ts-expect-error: "oups" is an invalid param
      oups: ":(",
    });
  }

  /**
   * 5. Implement a Wordle at the type level!
   *
   * If you don't know what Wordle is, it's a puzzle game in which players have
   * six attempts to guess a five-letter word, with feedback given for each
   * guess in the form of colored tiles indicating when letters match ("🟩"),
   * occupy the correct position ("🟨") or don't match "_".
   *
   * check out https://www.nytimes.com/games/wordle/index.html to try the actual game
   *
   * This is very challenging, if you manage to solve it on your own congrats!
   * You know as much as we do about type-level TypeScript now :).
   */
  namespace five {
    type todaysSecretWord = "READY";

    type Wordle<str> = TODO;

    type res1 = Wordle<"POINT">;
    type test1 = Expect<Equal<res1, " _  _  _  _  _ ">>;

    type res2 = Wordle<"NAMES">;
    type test2 = Expect<Equal<res2, " _  🟨  _  🟨  _ ">>;

    type res3 = Wordle<"CRANE">;
    type test3 = Expect<Equal<res3, " _  🟨  🟩  _  🟨 ">>;

    type res4 = Wordle<"READS">;
    type test4 = Expect<Equal<res4, " 🟩  🟩  🟩  🟩  _ ">>;

    type res5 = Wordle<"READY">;
    type test5 = Expect<Equal<res5, " 🟩  🟩  🟩  🟩  🟩 ">>;
  }
}