import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock window properties
Object.defineProperty(window, "innerWidth", { value: 1024 });
Object.defineProperty(window, "innerHeight", { value: 768 });

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
