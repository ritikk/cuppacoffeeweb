import { useStaticQuery, graphql } from "gatsby"

export const HookStore = () => {
  const { strapiStore } = useStaticQuery(graphql`
    {
      strapiStore {
        name
        id
        categories {
          id
          name
        }
      }
    }
  `)
  return strapiStore
}
