export default function guardrail(mathFunction) {
    let queue = [];
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(`Error: ${error.message}`);
    } finally {
      queue.push('Guardrail was processed');
    }
    return queue;
}  