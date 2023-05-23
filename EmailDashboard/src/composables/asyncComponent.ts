import { defineAsyncComponent } from 'vue'
import loadingState from '@components/States/LoadingState.vue'
import loadingStateError from '@components/States/LoadingStateError.vue'

export const defineAsyncComp = (loader: any) => {
  return defineAsyncComponent(
    {
      loader,
      loadingComponent: loadingState,
      errorComponent: loadingStateError,
      delay: 200,
      // timeout: 3000,
    })
}
