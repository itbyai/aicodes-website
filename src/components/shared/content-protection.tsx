'use client'

import { useEffect } from 'react'

export function ContentProtection() {
  useEffect(() => {
    // 禁止右键菜单
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // 禁止复制
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      return false
    }

    // 禁止剪切
    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault()
      return false
    }

    // 禁止拖拽选择
    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    // 禁止键盘快捷键复制 (Ctrl+C, Cmd+C, Ctrl+A, Cmd+A等)
    const handleKeyDown = (e: KeyboardEvent) => {
      // 禁止 Ctrl+C / Cmd+C (复制)
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault()
        return false
      }
      // 禁止 Ctrl+A / Cmd+A (全选)
      if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault()
        return false
      }
      // 禁止 Ctrl+X / Cmd+X (剪切)
      if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
        e.preventDefault()
        return false
      }
      // 禁止 Ctrl+U / Cmd+U (查看源代码)
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault()
        return false
      }
      // 禁止 F12 (开发者工具)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      // 禁止 Ctrl+Shift+I / Cmd+Option+I (开发者工具)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }
    }

    // 添加事件监听器
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCut)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('keydown', handleKeyDown)

    // 清理函数
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCut)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
