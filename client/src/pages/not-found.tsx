import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
  <title>404 - Page Not Found | FF Max Pro League</title>
  <meta
    name="description"
    content="Oops! The page you're looking for doesn't exist. Return to the home page or explore our Free Fire tournaments."
  />
  <meta name="robots" content="noindex, follow" />
  <meta property="og:title" content="404 - Page Not Found | FF Max Pro League" />
  <meta
    property="og:description"
    content="Oops! This page doesn't exist. You may have entered a wrong URL."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://booyah.dailybyte.xyz/" />
  <meta
    property="og:image"
    content="https://cdn.discordapp.com/attachments/1362394089378676847/1376225455266463896/Image.png?ex=68348d55&is=68333bd5&hm=a713cc89bb1ad34ca2f0b7e3dd640b2b4649a4d38dc7ca66a84f5087e00f7e28&"
  />
</Helmet>
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
