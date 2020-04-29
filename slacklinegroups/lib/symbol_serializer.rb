module Slg
  class SymbolSerializer
    def self.dump(symbol)
      return unless symbol
      symbol.to_s
    end

    def self.load(db_string)
      return unless db_string
      db_string.to_sym
    end
  end
end