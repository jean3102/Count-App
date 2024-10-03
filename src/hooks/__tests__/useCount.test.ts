import { act, renderHook } from '@testing-library/react';
import { useCount } from '../useCount';

describe('useCount', () => {
	it('should return the initial state', () => {
		const { result } = renderHook(() => useCount(0));
		const { value, errorMsj } = result.current;
		expect(value).toBe(0);
		expect(errorMsj).toBe('');
	});

	it('should decrement the value correctly', () => {
		const { result } = renderHook(() => useCount(1));
		act(() => {
			result.current.decrement();
		});
	});

    it('should increment the value correctly',() => {
      const  {result} = renderHook(() => useCount(1))
      act(() => {
        result.current.increment()
      })

      expect(result.current.value).toBe(2)
    })

	it('should not decrement below 0 and show an error message', () => {
		const { result } = renderHook(() => useCount(0));

        act(() => {
            result.current.decrement()
        })
        expect(result.current.errorMsj).toBe("cannot decrement to negative numbers")
	});
});
