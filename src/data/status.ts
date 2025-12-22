export interface StatusData {
  currentStatus: string;
  emoji: string;
  quickLinks: {
    label: string;
    href: string;
    icon: string;
  }[];
}

export const statusData: StatusData = {
  currentStatus: "Building cool things with web technologies 🚀",
  emoji: "👨‍💻",
  quickLinks: [
    {
      label: "Email",
      href: "mailto:hello@byteco.dev",
      icon: "✉️"
    },
    {
      label: "GitHub",
      href: "https://github.com/bytecodesky",
      icon: "🐙"
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: "🐦"
    }
  ]
};
