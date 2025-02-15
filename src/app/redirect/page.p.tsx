export default function TestPage() {
  /**
   * This page redirect to home, the logic is in next.config.js
   * JUST FOR TESTING PURPOSES
   */

  return (
    <main>
      <h1>Test Page</h1>
      <p>Custom Key: {process.env.customKey}</p>
    </main>
  )
}
