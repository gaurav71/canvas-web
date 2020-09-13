import { useEffect, useState } from "react"
import { useIsLoginQuery } from "../../generated/graphql"

const useCheckAuth = () => {
  const { loading, data } = useIsLoginQuery()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (!loading && data?.isLogin) {
      setIsLogin(true)
    }
  }, [data])

  return [loading, isLogin]
}

export default useCheckAuth