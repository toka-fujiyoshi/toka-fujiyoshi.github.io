import { TODO_TYPE } from '../constants/constants'
import { TodoList } from './TodoList'

/** TODOデータの型 */
export type TodoData = {
    /** ID */
    id: string
    /** タイトル */
    title: string
    /** 本文 */
    body: string
    /** 開始日 */
    fromDate: string
    /** 終了日 */
    toDate: string
    /** 重要フラグ */
    important: boolean
    /** カテゴリー */
    category: keyof typeof TODO_TYPE
}

/**
 * TODOリストのコンテナ
 * @returns
 */
export const TodoContainer = () => {
    const todos: TodoData[] = [...Array(20)].map((_, i) => ({
        id: `test${i}`,
        title: `テストタイトル${i}`,
        body: 'テストテストテストテストテスト\r\nテストテストテストテスト\r\nテストテストテストテストテストテスト',
        fromDate: '2025-01-19',
        toDate: '2026-01-19',
        important: !(i % 5),
        category: 'other',
    }))

    return <TodoList todos={todos} />
}
