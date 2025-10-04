export const getTagColor = (tag: string): string => {
  const tagColors: Record<string, string> = {
    Security: "bg-tag-security/20 border-tag-security text-tag-security",
    Pentesting: "bg-tag-security/20 border-tag-security text-tag-security",
    WebApps: "bg-tag-security/20 border-tag-security text-tag-security",
    Python: "bg-tag-python/20 border-tag-python text-tag-python",
    DevOps: "bg-tag-devops/20 border-tag-devops text-tag-devops",
    Hardware: "bg-tag-hardware/20 border-tag-hardware text-tag-hardware",
    Cloud: "bg-tag-cloud/20 border-tag-cloud text-tag-cloud",
  };

  return tagColors[tag] || "bg-primary/20 border-primary text-primary";
};

export const getTagGlowColor = (tag: string): string => {
  const glowColors: Record<string, string> = {
    Security: "shadow-[0_0_15px_hsl(var(--tag-security)/0.5)]",
    Pentesting: "shadow-[0_0_15px_hsl(var(--tag-security)/0.5)]",
    WebApps: "shadow-[0_0_15px_hsl(var(--tag-security)/0.5)]",
    Python: "shadow-[0_0_15px_hsl(var(--tag-python)/0.5)]",
    DevOps: "shadow-[0_0_15px_hsl(var(--tag-devops)/0.5)]",
    Hardware: "shadow-[0_0_15px_hsl(var(--tag-hardware)/0.5)]",
    Cloud: "shadow-[0_0_15px_hsl(var(--tag-cloud)/0.5)]",
  };

  return glowColors[tag] || "shadow-[0_0_15px_hsl(var(--primary)/0.5)]";
};
