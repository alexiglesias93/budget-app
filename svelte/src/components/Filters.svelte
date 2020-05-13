<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Exports
  export let activeFilter;

  // Functions
  const dispatch = createEventDispatcher();
</script>

<div class="filters">
  <div
    class="filter"
    class:active={activeFilter === 'all'}
    on:click={() => dispatch('filter', 'all')}>
    All
  </div>
  <div
    class="filter"
    class:active={activeFilter === 'income'}
    on:click={() => dispatch('filter', 'income')}>
    Income
  </div>
  <div
    class="filter"
    class:active={activeFilter === 'expenses'}
    on:click={() => dispatch('filter', 'expenses')}>
    Expenses
  </div>
</div>
