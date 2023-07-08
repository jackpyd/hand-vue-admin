import mitt from 'mitt'
import type { Emitter } from 'mitt'

// 添加类型约束
type Events = {
  openPanel: string
}

export const emitter: Emitter<Events> = mitt<Events>()
