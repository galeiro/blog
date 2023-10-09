import { useRouter } from "next/router";
import React from "react";

const PasswordProtectPage = () => {
  const router = useRouter();
  const error = router.query.error;
  return (
      <div class="grid place-content-center">
          <h1 class="font-bold text-2xl mb-1">Hello Again!</h1>
            <p class="text-sm font-normal mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
            </svg>
              <form action="/api/password-protect" method="post">
                <input class="pl-2 flex flex-col outline-none border-none " type="text" placeholder="Password" />
              </form>
          </div>
          <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
          {error && (
            <span className="text-xs my-10 text-error">{error}</span>
          )}
      </div>
  );
};

export default PasswordProtectPage;