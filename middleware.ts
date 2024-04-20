import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", '/'],
  // afterAuth:   
  // publicRoutes:["/"],
  // ignoredRoutes:["/"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
