import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TodoList } from './TodoList'

describe('TodoListのテスト', () => {
    test('TODOリストテーブルが表示されるか（データ0件）', () => {
        render(<TodoList todos={[]} />)
        const tableElement = screen.getByTestId('todo-list')
        expect(tableElement).toBeInTheDocument()
    })
})
