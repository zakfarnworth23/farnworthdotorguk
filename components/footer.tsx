import Image from "next/image";

export default function Footer() {
  return (
    <footer className="govuk-blue-dark text-white py-6 mt-8">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col items-center space-y-2">
        <Image
          src="/uk-crest.svg" // Ensure this file is in your /public/images folder
          alt="UK Government Emblem"
          width={40}
          height={40}
        />
        <p className="text-lg font-bold text-white text-center">Office of Zak Farnworth</p>
        <p className="text-lg font-bold text-white text-center">Not a real office, just a personal one.</p>
      </div>
    </footer>
  );
}
