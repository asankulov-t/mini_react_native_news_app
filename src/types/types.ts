export type Root={
    status: string
    copyright: string
    num_results: number
    results: Array<Result>
}

export type Result={
    uri?: string
    url: string
    id: number
    asset_id: number
    source: string
    published_date: string
    updated: string
    section: string
    subsection: string
    nytdsection: string
    adx_keywords: string
    column: any
    byline: string
    type: string
    title: string
    abstract: string
    des_facet: string[]
    org_facet: any[]
    per_facet: any[]
    geo_facet: string[]
    media: Medum[]
    eta_id: number
}

export type Medum={
    type: string
    subtype: string
    caption: string
    copyright: string
    approved_for_syndication: number
    "media-metadata": Metadaum[]
}

export type Metadaum={
    url: string
    format: string
    height: number
    width: number
}
