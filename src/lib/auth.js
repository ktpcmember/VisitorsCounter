import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from "./firebase.js";

// sha256
export async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, "0")).join("");
}

//login
export async function loginWithPassword(pw) {
  const inputHash = await sha256(pw);

  const snap = await getDoc(doc(db, "auth", "password"));
  const correctHash = snap.data().hashed;

  if (inputHash === correctHash) {
    localStorage.setItem("club_logged_in", "1");
    return true;
  }
  return false;
}
//login state check
export function requireLogin() {
  if (localStorage.getItem("club_logged_in") !== "1") {
    window.location.href = "/login";
  }
}