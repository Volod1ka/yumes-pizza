const MOCK_DATA_ENABLED: boolean = true

export const requestWithMock = async <T>(
  callBack: () => Promise<T>,
  mockData: T,
): Promise<T> => {
  if (process.env.NODE_ENV === 'development' && MOCK_DATA_ENABLED) {
    return mockData
  }

  return callBack()
}
