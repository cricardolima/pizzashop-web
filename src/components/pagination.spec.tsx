import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Pagination } from '@/components/pagination.tsx'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        onPageChange={onPageChangeCallback}
        perPage={10}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        onPageChange={onPageChangeCallback}
        perPage={10}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledOnce()
  })

  it('should be able to navigate to previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        onPageChange={onPageChangeCallback}
        perPage={10}
      />,
    )

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(previousPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        onPageChange={onPageChangeCallback}
        perPage={10}
      />,
    )

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(firstPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        onPageChange={onPageChangeCallback}
        perPage={10}
      />,
    )

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(lastPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})
