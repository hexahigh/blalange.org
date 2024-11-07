import { writable, type Writable } from "svelte/store";
import type { Agent } from "@fingerprintjs/fingerprintjs";

export const fingerprint: Writable<Agent | null> = writable(null);
export const botd: Writable<any> = writable(null);