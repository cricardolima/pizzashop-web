import '@testing-library/jest-dom'

import { vi } from 'vitest'

// Configuração do ambiente global
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))
