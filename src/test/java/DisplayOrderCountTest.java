import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class DisplayOrderCountTest {
    @Test public void testDisplayZeroForEmptyOrders() throws IOException {
        assertEquals(DisplayOrderCount.run(new String[]{"./src/test/java/emptyOrders.json"}), 0);
    }

    @Test public void testDisplayCountForAllOrders() throws IOException {
        assertEquals(DisplayOrderCount.run(new String[]{"./src/test/java/mixedReadyAndNotReadyOrders.json"}), 3);
    }

    @Test public void testDisplayCountOnlyForReadyOrders() throws IOException {
        assertEquals(DisplayOrderCount.run(new String[]{"-r", "./src/test/java/oneReadyAndOneNotReadyOrders.json"}), 1);
    }
}
