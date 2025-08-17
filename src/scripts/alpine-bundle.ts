import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import intersect from '@alpinejs/intersect'

Alpine.plugin(collapse)
Alpine.plugin(intersect)

;(window as any).Alpine = Alpine
Alpine.start()
