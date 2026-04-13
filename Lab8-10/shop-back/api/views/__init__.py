# 1 - FBV
# from .fbv import products_list, product_detail

# 2 - CBV
# from .cbv import ProductListAPIView, ProductDetailAPIView

# 3 - Mixins
# from .mixins import ProductListAPIView, ProductDetailAPIView

# 4 - Generics
from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)