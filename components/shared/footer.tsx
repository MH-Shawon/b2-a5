import Link from "next/link";
import {
    Home,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";



import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconBase } from "react-icons";


const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Apartments", href: "/properties?category=apartment" },
    { label: "Houses", href: "/properties?category=house" },
    { label: "Rooms", href: "/properties?category=room" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "FAQ", href: "/faq" },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "#",
        icon: <FaFacebookF />,
    },
    {
        label: "Instagram",
        href: "#",
        icon: <FaInstagram />,
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: <FaLinkedin />,
    },
];

export default function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex w-fit items-center gap-2">


                            <span className="flex justify-items-center gap-2">
                                <Home className="size-6 text-primary " />
                                <span className="text-xl font-bold">
                                    Rent<span className="text-primary">Nest</span>
                                </span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                            Find apartments, houses, and rooms that feel like home.
                            RentNest makes renting simple and stress-free.
                        </p>

                        <div className="mt-5 flex gap-2">
                            {socialLinks.map(({ label, href, icon }) => (
                                <Tooltip key={label}>
                                    <TooltipTrigger >
                                        <Link
                                            href={href}
                                            aria-label={label}
                                            className="inline-flex size-9 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <IconBase>{icon}</IconBase>

                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>{label}</TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <FooterLinks title="Explore" links={exploreLinks} />

                    {/* Company */}
                    <FooterLinks title="RentNest" links={companyLinks} />

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold">Get in touch</h3>

                        <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                            <ContactItem
                                icon={MapPin}
                                text="Dhaka, Bangladesh"
                            />

                            <ContactItem
                                icon={Phone}
                                text="+880 1XXX-XXXXXX"
                            />

                            <ContactItem
                                icon={Mail}
                                text="support@rentnest.com"
                            />
                        </div>

                        <Button className="mt-6">
                            <Link href="/properties">Find a Home</Link>
                        </Button>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom */}
                <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        ©  RentNest. All rights reserved.
                    </p>

                    <p>
                        Made with <span className="text-primary">♥</span> for better
                        renting.
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* Reusable Components */

function FooterLinks({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div>
            <h3 className="text-sm font-semibold">{title}</h3>

            <nav className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

function ContactItem({
    icon: Icon,
    text,
}: {
    icon: React.ElementType;
    text: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <Icon className="size-4 shrink-0 text-primary" />
            <span>{text}</span>
        </div>
    );
}