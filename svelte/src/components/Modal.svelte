<script>
  // Svelte
  import { createEventDispatcher } from "svelte";
  import { fade, scale } from "svelte/transition";

  // Stores
  import transactions from "../transactions";

  // Helpers
  import { uuidv4 } from "../helpers";

  // Exports
  export let editMode, editID;

  // Variables
  let inputs = {
    type: "income",
    category: "",
    concept: "",
    value: null
  };

  // Reactive
  $: editModePrint = editMode === "new" ? "New" : "Edit";
  $: typePrint = inputs.type === "income" ? "Income" : "Expense";
  $: categoryOptions =
    inputs.type === "income"
      ? ["Salary", "Sale", "Saving"]
      : ["Shopping", "Rent", "Leisure"];
  $: if (editID)
    inputs = $transactions.find(transaction => transaction.id === editID);

  // Functions
  const dispatch = createEventDispatcher();

  function toggleType() {
    if (inputs.type === "income") {
      inputs.type = "expenses";
    } else {
      inputs.type = "income";
    }
  }

  function formSubmit() {
    if (!inputs.type || !inputs.category || !inputs.value) return;

    if (editID) {
      transactions.modify(inputs);
      dispatch("close");
      return;
    }

    const id = uuidv4();
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const datePrint = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;

    transactions.add({ ...inputs, id, date: datePrint });
    dispatch("close");
    console.log($transactions);
  }
</script>

<div class="modal">
  <div
    class="modal_form w-form"
    in:scale={{ delay: 250 }}
    out:scale={{ duration: 250 }}>
    <div class="form_head">
      <h3 class="mb-0">{editModePrint} {typePrint}</h3>
      <div
        class="form_switch {inputs.type === 'expenses' ? 'active' : ''}"
        on:click={toggleType}>
        <div
          class="switch_circle {inputs.type === 'expenses' ? 'active' : ''}" />
      </div>
    </div>
    <form
      id="modal-form"
      name="Modal Form"
      on:submit|preventDefault={formSubmit}>
      <div class="input_wrap">
        <label for="Category" class="input_label">Category</label>
        <select
          class="input w-select"
          id="category"
          name="Category"
          data-name="Category"
          required
          bind:value={inputs.category}>
          <option value="" />
          {#each categoryOptions as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <div class="input_wrap">
        <label for="Concept" class="input_label">Concept</label>
        <input
          type="text"
          class="input w-input"
          id="concept"
          maxlength="256"
          name="Concept"
          data-name="Concept"
          required
          bind:value={inputs.concept} />
      </div>

      <div class="input_wrap">
        <label for="Value" class="input_label">Value</label>
        <input
          type="number"
          class="input w-input"
          id="value"
          maxlength="256"
          name="Value"
          data-name="Value"
          required
          bind:value={inputs.value} />
      </div>

      <div class="form_controls">
        <button
          type="submit"
          class="form_submit w-button"
          on:click|preventDefault={formSubmit}>
          Save
        </button>
        <button
          type="button"
          class="form_cancel w-button"
          on:click={() => dispatch('close')}>
          Cancel
        </button>
      </div>
    </form>
  </div>
  <div
    class="modal_overlay"
    in:fade={{ duration: 250 }}
    out:fade={{ delay: 250 }} />
</div>
