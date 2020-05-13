<script>
  // Svelte
  import { createEventDispatcher } from "svelte";

  // Stores
  import transactions from "../transactions";

  // Variables
  //let balance = 0;

  // Reactive

  $: balance = $transactions.reduce((acc, curr) => {
    if (curr.type === "income") {
      return acc + curr.value;
    } else {
      return acc - curr.value;
    }
  }, 0);
  $: negative = Math.sign(balance) === -1 ? true : false;
  //console.log(balance);

  // Functions
  const dispatch = createEventDispatcher();
</script>

<div class="control">
  <div class="control_status">
    <h2 class="status_title">Balance:</h2>
    <div class="status_balance" class:negative>{balance}€</div>
  </div>
  <div class="control_add" on:click={() => dispatch('add')}>
    <div class="add_icon w-embed">
      <svg
        viewbox="0 0 448 448"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M416 176H272V32C272 14.33 257.67 0 240 0H208C190.33 0 176 14.33 176
          32V176H32C14.33 176 0 190.33 0 208V240C0 257.67 14.33 272 32
          272H176V416C176 433.67 190.33 448 208 448H240C257.67 448 272 433.67
          272 416V272H416C433.67 272 448 257.67 448 240V208C448 190.33 433.67
          176 416 176Z" />
      </svg>
    </div>
    <div class="add_text">Add new</div>
  </div>
</div>
