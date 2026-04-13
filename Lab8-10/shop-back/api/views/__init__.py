# 1 - FBV
# from .fbv import products_list, product_detail, active_products, expensive_products

# 2 - CBV
# from .cbv import ProductListAPIView, ProductDetailAPIView, ActiveProductListAPIView, ExpensiveProductListAPIView

# 3 - Mixins
# from .mixins import ProductListAPIView, ProductDetailAPIView, ActiveProductListAPIView, ExpensiveProductListAPIView

# 4 - Generics
from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,

    ActiveProductListAPIView,
    ExpensiveProductListAPIView
)