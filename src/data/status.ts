export interface StatusData {
  currentStatus: string;
  quickLinks: {
    label: string;
    href: string;
    icon: string; // Lucide icon name
  }[];
}

export const statusData: StatusData = {
  currentStatus: "Building cool things with web technologies",
  quickLinks: [
    {
      label: "Email",
      href: "mailto:hello@byteco.dev",
      icon: "Mail"
    },
    {
      label: "GitHub",
      href: "https://github.com/bytecodesky",
      icon: "Github"
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: "Twitter"
    }
  ]
};
