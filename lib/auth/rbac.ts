export type Role = "viewer" | "editor" | "publisher";

export function canView(role: Role) {
  return ["viewer", "editor", "publisher"].includes(role);
}

export function canEdit(role: Role) {
  return role === "editor" || role === "publisher";
}

export function canPublish(role: Role) {
  return role === "publisher";
}
