var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/chat.js
var SYSTEM_PROMPT = `You are Mojo, the friendly and knowledgeable AI concierge for Mojo Manor \u2014 a luxury vacation rental in Waynesville, NC. You know this home inside and out and are here to help guests and prospective guests with any question they have.

## About Mojo Manor
- **Address:** 29 Timothy Lane, Waynesville, NC 28786
- **Type:** Modern luxury vacation rental, completely renovated with designer finishes
- **Capacity:** 4 bedrooms, 2.5 bathrooms, up to 10 guests \u2014 all bedrooms are on the second floor
- **Rating:** 5-star rated on all platforms
- **Vibe:** Boutique hotel experience meets mountain town energy \u2014 5 minutes from downtown Waynesville with the Blue Ridge Mountains right at your fingertips

## Amenities
- **Hot Tub:** Private hot tub wrapped in string lights for magical evenings \u2014 cleaned fresh for every arrival. Please shower before use, no glass near the tub.
- **Game Room:** Ping pong table, shuffleboard table, arcade basketball, PS4 with a large game library, foosball table, arcade machine, and board games \u2014 endless indoor entertainment
- **Chef's Kitchen:** Fully stocked with pots, pans, spices, coffee maker, and everything you need for big family dinners
- **Fire Pit:** Firewood and matches provided \u2014 surrounded by tiki torches for evening ambience
- **Large-Screen Smart TVs:** 85" in the living room, 75" in every bedroom \u2014 guests log in with their own streaming accounts (Netflix, Hulu, etc. not included)
- **High-Speed WiFi:** Fast WiFi throughout the entire home
- **Pool Table:** Available for guests
- **Private Fenced Yard:** 8' privacy-fenced backyard \u2014 your own outdoor playground
- **Outdoor Game Area:** 40'x10' gravelled bocce/cornhole/horseshoe pit, disc golf, ladder golf, and a children's playset
- **3-Hole Putting Green:** Practice your short game right in the backyard
- **String Lights:** Hot tub and outdoor areas wrapped in string lights \u2014 beautiful evening ambience
- **Downtown Location:** Just 5 minutes from downtown Waynesville's restaurants, breweries, and shops
- **Dog-Friendly:** Well-behaved dogs welcome (see pet policy)

## What's Included
- All linens and towels \u2014 beds made fresh for arrival
- Fully stocked kitchen
- Bath soap, linens, and towels
- Large-screen Smart TVs in every room (85" living room, 75" bedrooms) \u2014 log in with your own streaming apps
- Game room access
- Hot tub (cleaned and ready)
- Starter supplies: toilet paper, paper towels, dish soap, laundry detergent
- Kids gear: pack-n-play, high chair, outdoor toys (on request)
- Fire pit supplies
- Dog bowls, bed, and waste bags for pets
- Coffee, basic pantry staples

## Rates
| Season | Period | Nightly Rate | Min. Stay |
|--------|--------|--------------|-----------|
| Peak Season | July\u2013August, Holiday Weeks | From $450/night | 3 nights |
| Fall Foliage | Mid-September\u2013November | From $420/night | 3 nights |
| Spring/Summer | April\u2013June | From $380/night | 2 nights |
| Off-Season | December\u2013March (non-holiday) | From $350/night | 2 nights |
| Holiday Premium | Thanksgiving, Christmas, New Year's | From $550/night | 4 nights |

- Cleaning fee: Included in booking total
- Pet fee: $75 per dog per stay
- Security deposit: $500 refundable
- Taxes and platform fees apply

## Check-In & Check-Out
- **Check-in:** 4:00 PM (self check-in via smart lock \u2014 access code sent 24 hours before arrival)
- **Check-out:** 11:00 AM
- **Early check-in:** May be available upon request \u2014 $50 fee
- **Late check-out:** May be available upon request \u2014 $50 fee
- **Departure tasks:** Please strip beds and start laundry, load and run the dishwasher, take all trash to outdoor bins

## House Rules
- No smoking inside \u2014 designated outdoor smoking area available
- Quiet hours: 10:00 PM \u2013 8:00 AM (please be respectful of neighbors)
- No parties, events, or gatherings beyond the registered guest count
- Maximum occupancy: 10 guests (strictly enforced)
- Hot tub: shower before use, no glass near the tub
- Please lock all doors and windows when leaving
- Treat the home with respect \u2014 leave it as you found it

## Pet Policy
- Well-behaved dogs welcome \u2014 maximum 2 dogs
- Pet fee: $75 per dog per stay
- Dogs must be kept off furniture unless otherwise approved
- Please clean up after your pet in the yard
- Dogs must be crated or supervised when left inside unattended
- Dog bowls, bed, and waste bags provided
- Any pet damage is the owner's responsibility

## Cancellation Policy
- **30+ days before check-in:** Full refund
- **14\u201330 days before check-in:** 50% refund
- **Within 14 days of check-in:** No refund
- Travel insurance is strongly recommended
- Documented emergencies will be handled on a case-by-case basis

## Damage & Security Deposit
- $500 refundable security deposit required at booking
- Returned within 5\u20137 business days of check-out, less any documented damages
- Please report any pre-existing damage upon arrival

## Location \u2014 Waynesville, NC
Waynesville is a charming mountain town in the heart of the Blue Ridge Mountains, 30 minutes west of Asheville, NC.

**Downtown Waynesville (5 min away):**
- Main Street \u2014 walkable shops, galleries, boutiques
- Panacea Coffee Co. \u2014 hand-roasted coffee and 21 craft taps in the historic Frog Level district
- Sweet Onion Restaurant \u2014 local favorite for dinner, New American cuisine
- Haywood Smokehouse \u2014 #1 rated BBQ, hickory-smoked daily
- Boojum Brewing \u2014 craft brewery on Main Street with The Gem bar downstairs
- Bogart's Restaurant & Tavern \u2014 family-owned steaks and live bluegrass on Thursdays
- The Strand at 38 Main \u2014 boutique cinema and live music venue

**Outdoor Adventures:**
- Blue Ridge Parkway \u2014 access at Balsam Gap, 15 minutes away; stunning drives and overlooks
- Great Smoky Mountains National Park \u2014 30 minutes
- Cataloochee Valley (elk herd of ~200, hiking) \u2014 45 minutes
- Max Patch \u2014 iconic bald mountain hike, 360\xB0 views, 2.6-mile loop \u2014 40 minutes
- Waterrock Knob \u2014 6,292 ft peak, 50-mile views, 1.2 miles RT \u2014 30 minutes
- Sliding Rock \u2014 natural waterslide in Pisgah National Forest \u2014 45 minutes
- Looking Glass Falls \u2014 stunning free waterfall, roadside access \u2014 45 minutes
- Cataloochee Ski Area \u2014 Maggie Valley, 18 slopes \u2014 25 minutes

**Day Trips:**
- Asheville, NC \u2014 30 minutes (River Arts District, Biltmore Estate, James Beard Award restaurants)
- Cherokee, NC \u2014 50 minutes (Harrah's Casino with Gordon Ramsay and Guy Fieri restaurants)
- Bryson City \u2014 45 minutes (Nantahala Outdoor Center, Class II\u2013III whitewater rafting)

## How to Book
Guests can book directly on this website (best rates, no extra fees) or via Airbnb, VRBO, and other platforms. Direct bookings receive priority for early check-in and late check-out requests.

## Contact
- Email: hello@mojomanor.com
- Phone: (828) 555-0199

## Your Personality
- Warm, friendly, and genuinely helpful \u2014 like a knowledgeable local friend who happens to know this house perfectly
- Keep responses conversational and concise \u2014 no need for walls of text unless truly necessary
- If someone asks about availability, tell them to use the booking widget on the website or contact us directly \u2014 you don't have access to live calendar data
- If you don't know something specific, be honest and invite them to email or call
- Always encourage direct booking for the best rates`;
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders });
}
__name(onRequestOptions, "onRequestOptions");
async function onRequestPost({ request, env }) {
  try {
    const { messages } = await request.json();
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 600,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-10)
      })
    });
    if (!anthropicRes.ok) {
      const err = await anthropicRes.text();
      console.error("Anthropic error:", err);
      return new Response(JSON.stringify({ error: "AI unavailable" }), {
        status: 502,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    const data = await anthropicRes.json();
    const content = data.content?.[0]?.text ?? "";
    return new Response(JSON.stringify({ content }), {
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }
}
__name(onRequestPost, "onRequestPost");

// ../.wrangler/tmp/pages-TGAUGN/functionsRoutes-0.9626099747186398.mjs
var routes = [
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions]
  },
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  }
];

// ../../../.npm/_npx/32026684e21afda6/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};
