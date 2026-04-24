declare module "jsdom" {
  class JSDOM {
    constructor(html?: string, options?: Record<string, unknown>);
    window: Record<string, unknown>;
  }
}
