import ShopLayout from '@/libs/layouts/ShopLayout'
import React from 'react'

export default function ShopPage() {
  return <div>ShopPage</div>
}

ShopPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShopLayout>{page}</ShopLayout>
}
