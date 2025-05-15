import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        This website uses cookies to improve your experience while you navigate through the website. Out of these, the
        cookies that are categorized as necessary are stored on your browser as they are essential for the working of
        basic functionalities of the website.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What are cookies?</h2>
      <p className="mb-4">
        Cookies are small text files that are stored on your device when you visit a website. They are widely used in
        order to make websites work more efficiently, as well as to provide information to the owners of the site.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How we use cookies</h2>
      <p className="mb-4">We use different types of cookies for different reasons:</p>

      <h3 className="text-xl font-bold mt-6 mb-3">Essential cookies</h3>
      <p className="mb-4">
        These cookies are necessary for the website to function properly. They enable basic functions like page
        navigation and access to secure areas of the website. The website cannot function properly without these
        cookies.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Analytics cookies</h3>
      <p className="mb-4">
        These cookies collect information about how you use our website, which pages you visited and which links you
        clicked on. All of the data is anonymized and cannot be used to identify you.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-3">Preference cookies</h3>
      <p className="mb-4">
        These cookies enable the website to remember information that changes the way the website behaves or looks, like
        your preferred language or the region that you are in.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Managing cookies</h2>
      <p className="mb-4">
        You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access
        cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible
        or not function properly.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How to control cookies</h2>
      <p className="mb-4">
        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer
        and you can set most browsers to prevent them from being placed. If you do this, however, you may have to
        manually adjust some preferences every time you visit a site and some services and functionalities may not work.
      </p>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link href="/" className="text-govuk-blue hover:underline">
          Return to homepage
        </Link>
      </div>
    </div>
  )
}
