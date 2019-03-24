export type Config = IFrameConfig | FigmaConfig | PdfConfig

/**
 * Options for rendering iframe.
 */
export interface IFrameConfigBase {
  /**
   * An URL to show.
   */
  url: string

  /**
   * Allow embeded site to go in fullscreen mode.
   */
  allowFullscreen?: boolean
}

/**
 * Render iframe.
 */
export interface IFrameConfig extends IFrameConfigBase {
  type: 'iframe'
}

/**
 * Render Figma Live Preview.
 */
export interface FigmaConfig extends IFrameConfigBase {
  type: 'figma'

  /**
   * A string identifies your site.
   */
  embedHost?: string
}

/**
 * Render PDF file.
 */
export interface PdfConfig {
  type: 'pdf'

  /**
   * An URL for the PDF file.
   */
  url: string

  /**
   * Default scale value.
   * Must be greater than 0.
   */
  scale?: number

  /**
   * Default offset value.
   * Incresing X value moves document right.
   * Incresing Y value moves document down.
   */
  offset?: [number, number]

  /**
   * Default page number to show.
   */
  page?: number
}
