import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: " Evently",
    description: "Evently is a platform for events management.",
    icons: {
        icon: "/assets/images/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={poppins.variable}>
                  {/* <SignedOut>
                    <SignIn routing="hash"/>
                  </SignedOut>
                  <SignedIn> */}
                  {children}
                  {/* </SignedIn> */}
                </body>
            </html>
        </ClerkProvider>
    );
}
