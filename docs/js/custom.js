/**
 * OpenMIA Custom JavaScript
 * 
 * This file is loaded on every page via mkdocs.yml `extra_javascript`.
 * Use it for:
 *   - Interactive demos (chat widget, API playground)
 *   - Video playback control
 *   - Custom UI enhancements
 *   - Analytics events
 */

document.addEventListener("DOMContentLoaded", function () {
  console.log("[OpenMIA] Custom JS loaded.");

  // --- Demo Chat Widget (placeholder logic) ---
  const chatContainer = document.getElementById("demo-chat");
  if (chatContainer) {
    // Future: Initialize chat widget here
    // Example: new OpenMIAChat(chatContainer, { endpoint: "/v1/chat/completions" });
  }

  // --- Video Player Controls ---
  const videos = document.querySelectorAll("#demo-video video");
  videos.forEach(function (video) {
    // Future: Add custom controls, analytics tracking, etc.
    video.addEventListener("play", function () {
      console.log("[OpenMIA] Video started.");
    });
  });
});
