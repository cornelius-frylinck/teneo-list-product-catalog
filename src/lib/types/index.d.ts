type PagedList<T, TCursor> = {
  items: T[],
  nextCursor: TCursor
}

type MetaDataFilter = {
  category: string
  max_price: number
  min_price: number
  q: string
}


type ProductMetaData = {
  filter: MetaDataFilter
  has_next: boolean
  mode: string
  page: number
  page_size: number
  sort: string
  total: number
  total_pages: number,
  next_cursor: string
}

type ProductDetail = {
  id: number
  sku: string
  name: string
  category: string
  price: number
  price_fmt: string
  rating: number
  stock: number
  created_at: string
}

type ProductListPages = {
    data: ProductDetail[],
    meta: ProductMetaData
}

type ProductListResult = {
    pageParams: [],
    pages: ProductListPages[]
}

type HealthCheck = {
    db_time: string
    service: string
    status: string
    time: string
}

type ProductCatalogSettings = {
    q: string
    category: string
    min_price: number
    max_price: number | undefined
    page: number
    page_size: number
}