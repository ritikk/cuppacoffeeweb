import { Link } from "gatsby"
import React from "react"
import { HookStore } from "../hooks/store"

const Header = () => {
  const store = HookStore()
  return (
    <header
      style={{
        background: `#3a200f`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {store.name}
          </Link>
        </h1>
        <div>
          {store.categories.map(category => (
            <div>
              <Link
                to={`/category/${category.id}`}
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
