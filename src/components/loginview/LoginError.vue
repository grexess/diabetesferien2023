<template>
	<div class="modal fade" id="errorModal" tabindex="-1" ref="modalRef">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="errorModalLabel">Anmeldefehler</h5>
				</div>
				<div class="modal-body">
					{{ error }}
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
						@click="$emit('close')"
					>
						Nochmal
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Modal } from 'bootstrap';
defineProps({
	error: {
		type: String,
		default: '<<Title goes here>>',
	},
});
let modalRef = ref(null);
let modal = null;

onMounted(() => {
	modal = new Modal(modalRef.value);
});
function _show() {
	modal.show();
}
defineExpose({ show: _show });
</script>
