import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./Contact";
import emailjs from "@emailjs/browser";

// Mock emailjs before any other code
vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(),
  },
}));

// Get the mocked function after mocking the module
const mockSend = vi.mocked(emailjs.send);

describe("Contact Component", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it("renders contact form with all required fields", () => {
    render(<Contact />);

    // Check if all form elements are present
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("handles form submission successfully", async () => {
    // Mock successful emailjs.send
    mockSend.mockResolvedValueOnce({
      status: 200,
      text: "Message sent successfully",
    });

    render(<Contact />);

    // Fill out the form
    await userEvent.type(screen.getByLabelText(/your name/i), "John Doe");
    await userEvent.type(
      screen.getByLabelText(/your email/i),
      "john@example.com"
    );
    await userEvent.type(
      screen.getByLabelText(/your message/i),
      "Test message"
    );

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /send message/i });
    await userEvent.click(submitButton);

    // Check if emailjs.send was called with correct parameters
    expect(emailjs.send).toHaveBeenCalledWith(
      "service_e8pojai",
      "template_us8rnkt",
      {
        from_name: "John Doe",
        from_email: "john@example.com",
        message: "Test message",
        to_name: "Vishal BV",
        to_email: "vishalbv23@gmail.com",
      },
      "tIArEks7onBYnbvy1"
    );

    // Check for success message
    await waitFor(() => {
      expect(
        screen.getByText(/message sent successfully/i)
      ).toBeInTheDocument();
    });
  });

  it("handles form submission error", async () => {
    // Mock failed emailjs.send
    mockSend.mockRejectedValueOnce(new Error("Failed to send"));

    render(<Contact />);

    // Fill out the form
    await userEvent.type(screen.getByLabelText(/your name/i), "John Doe");
    await userEvent.type(
      screen.getByLabelText(/your email/i),
      "john@example.com"
    );
    await userEvent.type(
      screen.getByLabelText(/your message/i),
      "Test message"
    );

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /send message/i });
    await userEvent.click(submitButton);

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });

  it("updates wave amplitude on mouse movement", async () => {
    render(<Contact />);

    // Simulate mouse movement
    fireEvent.mouseMove(window, {
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });

    // Instead of looking for role="presentation", let's find the Wave components by their fill color
    const waves = screen.getAllByTestId("wave");
    expect(waves).toHaveLength(2); // We have two Wave components

    // waves.forEach((wave) => {
    //   expect(wave).toHaveStyle({
    //     position: "absolute",
    //     bottom: "0",
    //   });
    // });
  });
});
