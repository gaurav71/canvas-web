import { useIsLoginQuery } from "../../generated/graphql"

const useCheckAuth = () => {
  const { loading, data } = useIsLoginQuery()

  return [loading, !!data?.isLogin]
}

export default useCheckAuth