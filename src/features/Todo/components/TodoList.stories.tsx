import { TodoList } from './TodoList'
import { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TodoList> = {
    component: TodoList,
}
export default meta

/** ストーリーの型 */
type Story = StoryObj<typeof TodoList>

/** 件数が1件の場合 */
export const Count1: Story = {
    args: {
        todos: [
            {
                id: 'test1',
                title: 'テストタイトル1',
                body: 'テストテストテストテストテスト\r\nテストテストテストテスト\r\nテストテストテストテストテストテスト',
                fromDate: '2025-01-19',
                toDate: '2026-01-19',
                important: true,
                category: 'work',
            },
        ],
    },
}

/** 件数が20件の場合 */
export const Count20: Story = {
    args: {
        todos: [...Array(20)].map((_, i) => ({
            id: `test${i}`,
            title: `テストタイトル${i}`,
            body: 'テストテストテストテストテスト\r\nテストテストテストテスト\r\nテストテストテストテストテストテスト',
            fromDate: '2025-01-19',
            toDate: '2026-01-19',
            important: !(i % 5),
            category: 'other',
        })),
    },
}

/** 件数が0件の場合 */
export const Count0: Story = {
    args: {
        todos: [],
    },
}
