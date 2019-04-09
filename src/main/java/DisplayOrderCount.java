import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class DisplayOrderCount {
    public static void main(String[] args) {
        try {
            System.out.println(run(args));
        } catch (Exception e) {
            System.err.println(e);
            System.exit(1);
        }
    }

    static long run(String[] args) throws java.io.IOException {
        if (args.length == 0) throw new RuntimeException("must supply a filename");
        String filename = args[args.length - 1];
        return countOrders(args, filename);
    }

    private static long countOrders(String[] args, String filename) throws java.io.IOException {
        File input = Paths.get(filename).toFile();
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(input, Order[].class);
        if (Stream.of(args).anyMatch(arg -> "-r".equals(arg))) {
            return Stream.of(orders).filter(order -> "ready".equals(order.status)).count();
        } else {
            return orders.length;
        }
    }
}
