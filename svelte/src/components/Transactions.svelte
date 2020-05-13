<script>
  // Svelte
  import { flip } from "svelte/animate";
  import { fly, fade } from "svelte/transition";

  // Components
  import Transaction from "./Transaction.svelte";

  // Stores
  import transactions from "../transactions";

  // Exports
  export let activeFilter;

  // Reactive
  $: filteredTransactions =
    activeFilter === "all"
      ? $transactions
      : $transactions.filter(transaction => transaction.type === activeFilter);

  // Functions
  function deleteTransaction(e) {
    transactions.remove(e.detail);
  }
</script>

<div class="transactions">
  <div class="transactions_head">
    <h3 class="mb-0">Income &amp; Expenses</h3>
    <div class="transactions_count">
      <strong>Transactions:</strong>
      {filteredTransactions.length}
    </div>
  </div>
  <div class="transactions_list">
    {#if filteredTransactions.length > 0}
      {#each filteredTransactions as transaction (transaction.id)}
        <div animate:flip={{ duration: 250 }} transition:fly={{ x: 250 }}>
          <Transaction {...transaction} on:delete={deleteTransaction} />
        </div>
      {/each}
    {:else}
      <p in:fade={{ delay: 500, duration: 250 }}>No transactions available.</p>
    {/if}
  </div>
</div>
