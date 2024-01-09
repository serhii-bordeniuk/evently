import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/events/:id",
        "/api/webhook/clerk",
        "/api/webhook/stripe",
        "/api/uploadhing",
    ],
    ignoredRoutes: ["/api/webhook/clerk", "/api/webhook/stripe", "/api/uploadhing"],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
